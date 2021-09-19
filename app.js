import { resultText, testSolutions } from "./testing.js";
import * as solutions from './solutions.js';

const modules  = ['warmup', 'mapping', 'match', 'ddr'];

const app = Vue.createApp({
  data() {
    return { 
      exercises: {},
      modules: [],
      tested: false
    }
  },
  mounted() {
    fetchJsonList(modules)
    .then(json => {
      this.exercises = json;
      this.modules = testSolutions(json, solutions);
    })
    .catch(error => alert(error))
  },
  updated() {
    if (!this.tested) {
      this.tested = true;
      this.modules = testSolutions(this.exercises, solutions);
    }
  },
  methods: {
    display(text) {
      return resultText(text);
    },
    noteLinks (reading) {
      return replaceLinks(reading.base, reading.notes);
    },
    resultSuccess (result) {
      return result.success ? 'passed' : 'failed';
    }
  }
});

const fetchJsonList = async (modules) => {
  try {
    const urls = modules.map(module => `./exercises/${module}.json`);
    const results = await Promise.allSettled(urls.map(fetchJson));
    return results.reduce((obj, result) => (
      result.status !== 'fulfilled'
      ? obj
      : { ...obj, ...result.value }
    ), {}
    );
  } catch (error) {
    return null;
  }
};

const fetchJson = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.url} ${response.statusText}`)
    };
    
    return await response.json();
  } catch (error) {
    return null;
  }
};

// replace markdown style links with HTML links
const replaceLinks = (base, notes) => (
  notes && notes.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (md, text, link) => (
    `<a href="${base}${link}" target="js-help">${text}</a>`
  ))
);

app.component('accordion-toggle', {
  methods: {
    addHash(text) {
      return `#${text}`;
    }
  },
  props: ['target'],
  template: `
    <div data-bs-toggle="collapse" :data-bs-target="addHash(target)"
         aria-expanded="true" :aria-controls="target">
      <slot></slot>
    </div>
  `
});

app.mount('#app');