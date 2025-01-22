<script>
function secondsSinceAugust1() {
    const startDate = new Date('2022-08-01T00:00:00.000Z');
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - startDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    return seconds;
}

export default {
    name: "guessNumberComp",
    mounted() {
        let counter = secondsSinceAugust1();
        const digits = document.querySelectorAll('.counter span');

        function updateCounter() {
            counter++;
            const counterStr = counter.toString().padStart(10, '0');
            digits.forEach((digit, index) => {
                digit.textContent = counterStr[index];
            });
        }

        setInterval(updateCounter, 1000);
    }
}



</script>

<template>
    <div id="guessNumberComp">
        <div class="counter">
            <span id="digit-1">0</span>
            <span id="digit-2">0</span>
            <span id="digit-3">0</span>
            <span id="digit-4">0</span>
            <span id="digit-5">0</span>
            <span id="digit-6">0</span>
            <span id="digit-7">0</span>
            <span id="digit-8">0</span>
            <span id="digit-9">0</span>
            <span id="digit-10">0</span>
        </div>
        <div class="bottomText">The time I have been coding since!</div>
    </div>
</template>
