class PaginationHelper {
    constructor(items = [], maxItemsOnPage = 0) {
      this.items = items;
      this.maxItemsOnPage = maxItemsOnPage;
    }
    pageCount() {
      return Math.ceil(this.items.length / this.maxItemsOnPage)
    }
    itemCount() {
      return this.items.length
    }
    pageItemCount(pageIndex = -1) {
      let pages = [];
      let sliceStart = 0;
      let sliceEnd = this.maxItemsOnPage;

      if((pageIndex >= this.pageCount()) || (pageIndex < 0)) return -1;
      if((this.maxItemsOnPage < 0) || (this.maxItemsOnPage > this.items.length)) return -1;
      
      for(let i = 0; i < this.pageCount(); i++) {
        if(i == this.pageCount() - 1) {
            pages.push(this.items.slice(sliceStart, this.items.length));
        } else {
            pages.push(this.items.slice(sliceStart, sliceEnd));
        }
        sliceStart += this.maxItemsOnPage;
        sliceEnd += this.maxItemsOnPage;
      }
      return pages[pageIndex].length;
    }
    pageIndex(itemIndex = -1) {
      if((itemIndex >= this.items.length) || (itemIndex < 0)) return -1;
      
      for(let i = 1; i <= this.pageCount(); i++) {
          if(itemIndex < i * this.maxItemsOnPage) return i - 1;
      }

      return -1;
    }
  }