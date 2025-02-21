<template>

    <div id="exp">

        <div class="theTimeline">
            <h2>The Timeline <a href="#exp">&#128279;</a></h2>

            <div class="timelineContainer">

                <div style="display: flex" class="aboveTheTimeline">
                    <div v-for="(exp, index) in pastExp" :key="`${index}-pastExp`">
                        <AboveTimeLineComponent v-if="index % 2 === 0" :duration-text="`[ ${exp.start} - ${exp.end} ]`"
                            :position-name="exp.position" :company-name="exp.orgName" :company-href="exp.orgUrl" />
                    </div>
                </div>


                <div style="display: flex" class="belowTheTimeline">
                    <div v-for="(exp, index) in pastExp" :key="`${index}-pastExp`">
                        <BelowTimeLineComponent v-if="index % 2 !== 0" :duration-text="`[ ${exp.start} - ${exp.end} ]`"
                            :position-name="exp.position" :company-name="exp.orgName" :company-href="exp.orgUrl" />
                    </div>
                </div>
            </div>

        </div>

        <div class="otherResponsibilities">

            <h2>Other Responsibilities</h2>

            <div class="responsibilityTexts">
                <p v-for="(exp, index) in otherResponsibilities" :key="`${index}-otherPosition`"
                    class="responsibilityText">[ {{ exp.start }} - {{ exp.end }} ] : {{ exp.position }} @{{ exp.org }}
                </p>
            </div>
        </div>

    </div>

</template>


<script>
import AboveTimeLineComponent from "./AboveTimeline.vue"
import BelowTimeLineComponent from "./BelowTimeline.vue"

export default {
    name: "Experience-section",
    data() {
        return {
            otherResponsibilities: [
                {
                    position: "Technical Head",
                    org: "ACM-DYPIEMR",
                    orgUrl: "#",
                    start: "2023",
                    end: "2024"
                },
                {
                    position: "Web Development Head",
                    org: "Novus-Neurons",
                    orgUrl: "#",
                    start: "2023",
                    end: "2024"
                },
                {
                    position: "Web Developer",
                    org: "TEDX-DYPEC",
                    orgUrl: "#",
                    start: "2023",
                    end: "2024"
                },
                {
                    position: "Jt. Web Development Head",
                    org: "CSI-DYPIEMR",
                    orgUrl: "#",
                    start: "2022",
                    end: "2023"
                },
            ],

            pastExp: [
                {
                    start: "Sept, 2024",
                    end: "Present",
                    position: "FullStack Developer",
                    orgName: "Altrd",
                    orgUrl: "https://www.altrdtech.com/"
                },
                {
                    start: "April, 2024",
                    end: "July, 2024",
                    position: "FullStack Developer",
                    orgName: "Pooka Labs",
                    orgUrl: "#"
                },
                {
                    start: "Dec, 2023",
                    end: "Jan, 2024",
                    position: "Frontend Developer",
                    orgName: "Janvry Studios",
                    orgUrl: "https://www.janvry.com/"
                },
                {
                    start: "Sept, 2023",
                    end: "Nov, 2023",
                    position: "Three js Developer Intern",
                    orgName: "Zigy Prints",
                    orgUrl: "https://www.linkedin.com/company/zigycustoms/?originalSubdomain=in"
                },
            ]
        }
    },
    components: {
        AboveTimeLineComponent,
        BelowTimeLineComponent
    }
}
</script>