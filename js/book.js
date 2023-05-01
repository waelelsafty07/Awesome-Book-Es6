export default class Book {
  constructor() {
    this.localStorage = localStorage;
  }

  getLocalStorage() {
    const savedBookData = this.localStorage.getItem('books-data');
    const data = savedBookData ? JSON.parse(savedBookData) : [];
    return data;
  }

  setLocalStorage(data) {
    this.localStorage.setItem('books-data', JSON.stringify(data));
  }

  updateLocalStorageBookData(id) {
    return this.getLocalStorage().filter((e) => e.id !== id);
  }

  addBook(bookDetials) {
    const data = this.getLocalStorage();
    bookDetials.id = data.length + 1;
    data.push(bookDetials);
    this.setLocalStorage(data);
  }

  removeBook(id) {
    const data = this.updateLocalStorageBookData(id);
    this.setLocalStorage(data);
  }
}
