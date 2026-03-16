<script setup lang="ts">
import Slide from "../Slide.vue";
</script>

<template>
  <Slide :title="'Why Defensive Programming - A Real Life Example'">
    <div class="columns">
      <div class="column">
        <h4>Google Cloud Outage — June 12, 2025</h4>
        <ul>
          <li>New quota policy code hit an unexpected null value</li>
          <li>
            Google said policy data with unintended blank fields caused the
            binaries to crash loop
          </li>
          <li>
            In Google's own words:
            <em>"the binaries [went] into a crash loop"</em>
          </li>
        </ul>

        <h4 class="mt-4">The cost</h4>
        <ul>
          <li>
            7+ hour global outage — Gmail, Drive, Meet, Calendar, Cloudflare and
            more
          </li>
          <li>
            Businesses using Google Cloud had customer-facing errors worldwide
          </li>
          <li>
            Google's own status dashboard was delayed, so customers had no
            visibility
          </li>
        </ul>

        <div class="references mt-4">
          <p class="is-size-7 has-text-grey"><strong>Sources:</strong></p>
          <ul class="is-size-7 has-text-grey">
            <li>
              Google Cloud official incident report —
              <a
                href="https://status.cloud.google.com/incidents/ow5i3PPK96RduMcb1SsW"
                target="_blank"
                >status.cloud.google.com</a
              >
            </li>
            <li>
              Lord.technology analysis —
              <a
                href="https://lord.technology/2025/06/14/when-giants-fall-the-anatomy-of-googles-june-2025-outage.html"
                target="_blank"
                >lord.technology</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="column is-narrow diagram-column">
        <div class="diagram">
          <div class="diagram-box">All Requests</div>
          <div class="diagram-arrow">↓</div>
          <div class="diagram-box highlight">
            ServiceControl<br /><small class="has-text-danger"
              >crashed: null pointer exception</small
            >
          </div>
          <div class="diagram-arrow">↓ blocked</div>
          <div class="diagram-box muted">Google Cloud Services</div>
        </div>
      </div>
    </div>
  </Slide>
</template>

<style scoped>
.diagram-column {
  min-width: 240px;
}

.diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.diagram-box {
  border: 2px solid #4a4a4a;
  border-radius: 6px;
  padding: 0.4rem 1rem;
  text-align: center;
  background: #f5f5f5;
  font-size: 0.85rem;
  width: 100%;
}

.diagram-box.highlight {
  border-color: #cc0000;
  background: #fff0f0;
  font-weight: bold;
}

.diagram-arrow {
  font-size: 0.75rem;
  color: #555;
  padding: 0.2rem 0;
  text-align: center;
}

.diagram-note {
  margin-top: 0.6rem;
  font-size: 0.75rem;
  color: #cc0000;
  text-align: center;
}

.references ul {
  list-style: disc;
  padding-left: 1.2rem;
}

.diagram-box.muted {
  opacity: 0.4;
}
</style>
