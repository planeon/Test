class Shop {
    handlerClear() {
        ROOT_SHOP.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        Catalog.forEach(({ id, name, price }) => {
            if (productStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shop-element__name">⚡️ ${name}</td>
                        <td class="shop-element__price">${price.toLocaleString()} USD</td>
                    </td>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shop-container">
                <div class="shop__close" onclick="shoppingPage.handlerClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shop-element__name">💥 Сумма:</td>
                        <td class="shop-element__price">${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
        `;

        ROOT_SHOP.innerHTML = html;
    }
};


const shopPage = new Shop();