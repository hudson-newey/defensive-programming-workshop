export function generateTestCaseComment(testInputs: string[]): string {
    return `/**
 * Test cases:
${testInputs.map(input => ` * ${input}`).join('\n')}
 */`
}
