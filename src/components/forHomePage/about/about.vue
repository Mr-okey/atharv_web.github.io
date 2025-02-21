<template>
    <div id="aboutSection">
        <!-- Initially hidden header, will show with a slide-in effect once typing is complete -->
        <h1 ref="sectionHeader" v-if="headerVisible" id="aboutme">About me <a href="#aboutme">&#128279;</a></h1>
        <pre ref="typingText" v-text="displayedText"></pre>
    </div>
</template>

<script>
export default {
    name: 'About_Section',
    data() {
        return {
            fullText: `Hello! I'm Atharv, a passionate full-stack developer who believes coding is more than just typing text on a screen—it's about creating solutions that spark joy and solve real-world problems. As a final-year student of Artificial Intelligence and Data Science, I love turning innovative ideas into functional realities
  
My professional journey has been about embracing challenges with a smile, whether it's developing AI-powered chatbots at startups or managing technical teams in student organizations. I thrive on learning, collaborating, and keeping things fun and light-hearted, even when diving into complex technical projects
  
From building interactive web applications to exploring generative AI technologies, my work is driven by curiosity and a genuine love for technology. I'm not just about writing code; I'm about crafting experiences that make people go "Wow"
  
When I'm not coding, you'll find me leading technical initiatives in student clubs, continuously learning, and spreading my infectious enthusiasm for technology.`,
            displayedText: '',
            typingIndex: 0,
            headerVisible: false, // Initially hide the header
        };
    },
    methods: {
        typeText() {
            if (this.typingIndex < this.fullText.length) {
                this.displayedText += this.fullText[this.typingIndex];
                this.typingIndex++;
                setTimeout(this.typeText, 10); // Adjust typing speed by changing the timeout (in ms)
            } else {
                // Once typing is complete, show the header
                this.headerVisible = true;
            }
        },
        handleViewportEntry(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start typing effect when the element enters the viewport
                    this.typeText();
                    observer.disconnect(); // Stop observing after it starts typing
                }
            });
        },
    },
    mounted() {
        // Set up IntersectionObserver to trigger typing effect when in view
        const observer = new IntersectionObserver(this.handleViewportEntry, {
            threshold: 0.6, // Trigger when 50% of the element is in the viewport
        });
        observer.observe(this.$refs.typingText);
    },
};
</script>
