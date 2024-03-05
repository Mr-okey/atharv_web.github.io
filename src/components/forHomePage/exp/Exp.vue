<template>

    <div id="exp">

        <div class="theTimeline">
            <h2>The Timeline</h2>

            <div class="timelineContainer">

                <div class="aboveTheTimeline">
                    <AboveTimeLineComponent duration-text="[ Dec, 2023 - Jan, 2024 ]" position-name="Frontend Developer"
                        company-name="Janvry Studios" company-href="#" />
                    <AboveTimeLineComponent duration-text="[ Dec, 2023 - Jan, 2024 ]" position-name="Frontend Developer"
                        company-name="Janvry Studios" company-href="#" />
                </div>


                <div class="belowTheTimeline">
                    <BelowTimeLineComponent duration-text="[ Dec, 2023 - Jan, 2024 ]" position-name="Frontend Developer"
                        company-name="Janvry Studios" company-href="#" />
                </div>
            </div>

        </div>

        <div class="otherResponsibilities">

            <h2>Other Responsibilities</h2>

            <div class="responsibilityTexts">
                <p class="responsibilityText">[ 2023 - 2024 ] : Technical Head @ACM-DYPIEMR</p>
                <p class="responsibilityText">[ 2023 - 2024 ] : Technical Head @ACM-DYPIEMR</p>
                <p class="responsibilityText">[ 2023 - 2024 ] : Technical Head @ACM-DYPIEMR</p>
                <p class="responsibilityText">[ 2023 - 2024 ] : Technical Head @ACM-DYPIEMR</p>
            </div>
        </div>

    </div>

</template>


<script>
import AboveTimeLineComponent from "./AboveTimeline.vue"
import BelowTimeLineComponent from "./BelowTimeline.vue"

export default {
    name: "Experience-section",
    components: {
        AboveTimeLineComponent,
        BelowTimeLineComponent
    }
}
</script>