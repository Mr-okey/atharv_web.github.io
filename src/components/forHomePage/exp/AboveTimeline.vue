<template>

    <div class="experienceInfoContainer">
        <div class="experienceInfo">
            <i>{{ durationText }}</i><br />
            <b>{{ positionName }} | <a :href="companyHref" class="companyName">{{ companyName }}</a></b>
        </div>
        <div class="VerticalLine">
            <svg width="4" height="58" viewBox="0 0 4 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.83594" y1="57.4758" x2="1.83594" y2="0.404816" stroke="#FFF1C6" stroke-width="3" />
            </svg>
        </div>
    </div>


</template>

<script>
export default {
    name: "above-timeline-experience-component",
    props: [
        "durationText",
        "positionName",
        "companyName",
        "companyHref"
    ]
}
</script>