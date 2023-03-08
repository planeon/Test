class Head {
    render(count) {
        const html = `
           <div class="header-container">
                <div class="header-counter">
                   🗑️ ${count}
                </div>
           </div>
        `;

        ROOT_HEAD.innerHTML = html;
    }
}

const headerPage = new Head();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);

