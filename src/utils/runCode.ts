import zlib from 'zlib';

interface TioResponse {
    output: string;
    exitCode?: number;
}

interface RunOptions {
    input?: string;
    args?: string | string[];
    flags?: string | string[];
}

export async function runCode(code: string, inputs: string): Promise<TioResponse> {
    return await run(code, 'java-openjdk', {
        input: inputs,
    })
}

const API_URL = 'https://tio.run/cgi-bin/run/api/';

/**
 * @param {string} code
 * @param {string} language
 * @param {RunOptions} options
 */
async function run(code: string, language: string, options: RunOptions = {}) {
    let files: any = { ".code.tio": String(code) };
    let variables: any = { "lang": language };

    if (options.input != null) files[".input.tio"] = String(options.input);
    if (options.args != null) variables["args"] = options.args;
    if (options.flags != null) variables["TIO_CFLAGS"] = options.flags;
    let plain = '';
    for (const k in variables) {
        plain += `V${k}\0`;
        let v = variables[k];
        if (!Array.isArray(v)) v = [v];
        plain += `${v.length}\0`;
        for (const x of v) plain += `${x}\0`;
    }
    for (const k in files) {
        let v = files[k];
        plain += `F${k}\0${Buffer.byteLength(v)}\0${v}`;
    }
    plain += 'R';
    const buf = zlib.deflateRawSync(plain);

    const request = await fetch(API_URL, { method: 'POST', body: buf });
    const body = await request.text();

    const splitter = body.substring(0, 16);
    const output = body.replaceAll(splitter, '\n');

    const exitCodeMatch = output.match(/Exit code: (\d+)/);
    const exitCode = exitCodeMatch ? parseInt(exitCodeMatch[1], 10) : undefined;

    return { output, exitCode };
}
