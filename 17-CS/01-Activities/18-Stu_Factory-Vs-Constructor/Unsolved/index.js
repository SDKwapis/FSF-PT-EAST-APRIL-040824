// // TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();


const information = (state) => ({
  addLesson: () => console.log(`Title:${state.title} Description: ${state.description}`)
})

const lesson = (title, description) => {
  const state = {
    title,
    description,
  };
  return { ...information(state)};
}

const newLesson = lesson('new class', 'a book')

newLesson.addLesson();
