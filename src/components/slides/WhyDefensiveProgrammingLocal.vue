<script setup lang="ts">
import Slide from "../Slide.vue";
</script>

<template>
  <Slide :title="'Why Defensive Programming - Close to Home'">
    <div class="columns">
      <div class="column">
        <h4>Queensland Health Payroll Disaster — 2010</h4>
        <ul>
          <li>
            New payroll system went live with 2,000+ known defects, including 14
            classified as "showstoppers"
          </li>
          <li>
            ~78,000 Queensland Health workers were underpaid, overpaid, or not
            paid at all
          </li>
          <li>Pay runs froze entirely due to critical data errors</li>
          <li>
            Payroll staff had to make 200,000 manual entries each pay period to
            rectify problems
          </li>
          <li>
            The system could not reliably calculate basic leave entitlements
          </li>
        </ul>

        <h4 class="mt-4">The cost</h4>
        <ul>
          <li>
            $181M contracted — ballooned to an estimated
            <strong>$1.2B AUD</strong> over 8 years to remediate
          </li>
          <li>
            The Commission of Inquiry called it:
            <em
              >"the worst failure in public administration in this country"</em
            >
          </li>
        </ul>

        <div class="references mt-4">
          <p class="is-size-7 has-text-grey"><strong>Sources:</strong></p>
          <ul class="is-size-7 has-text-grey">
            <li>
              Chesterman Commission of Inquiry final report (2013) —
              <a
                href="http://www.healthpayrollinquiry.qld.gov.au/__data/assets/pdf_file/0014/207203/Queensland-Health-Payroll-System-Commission-of-Inquiry-Report-31-July-2013.pdf"
                target="_blank"
                >healthpayrollinquiry.qld.gov.au</a
              >
            </li>
            <li>
              ABC News —
              <a
                href="https://www.abc.net.au/news/2012-06-06/qld-health-payroll-debacle-to-cost-1.2b/4056378"
                target="_blank"
                >abc.net.au</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="column is-narrow diagram-column">
        <div class="diagram">
          <div class="diagram-box">Pay Run Triggered</div>
          <div class="diagram-arrow">↓</div>
          <div class="diagram-box highlight">
            Payroll System<br /><small class="has-text-danger"
              >critical data errors</small
            >
          </div>
          <div class="diagram-arrow">↓ abrupt termination</div>
          <div class="diagram-box muted">78,000 workers paid incorrectly</div>
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

.diagram-box.muted {
  opacity: 0.4;
}

.diagram-arrow {
  font-size: 0.75rem;
  color: #555;
  padding: 0.2rem 0;
  text-align: center;
}

.references ul {
  list-style: disc;
  padding-left: 1.2rem;
}
</style>
