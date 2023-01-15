export default class 
{
    /**
     * @param {HTML Table Element} root : The table element which will display the CSV data.
     */
    constructor(root) 
    {
        this.root = root;
    }

    /**
     * Clears existing data in the table and replaces it with new data
     * 
     * @param {string[][]} data : A 2D array of data to be used as the table body  
     * @param {string[]} headerColumns : List of headings to be used in the table 
     */
    update(data, headerColumns = []) 
    { 
        this.clear();
        this.setHeader(headerColumns);
        this.setBody(data);
    }

    /**
     * Clears all contents of the table (including the header)
     */
    clear()
    {
        this.root.innerHTML = '';
    }

    /**
     * Sets the table header.
     * 
     * @param {string[]} headerColumns : List of headings to be used in the table 
     */
    setHeader(headerColumns)
    {
        this.root.insertAdjacentHTML("afterbegin",`
            <thead>
                <tr>
                ${ headerColumns.map(text => `<th>${ text }</th>`).join("")}
                </tr>
            </thead>
        `);
    }


    /**
     * 
     * @param {string[][]} data : A 2D array of data to be used as the table body 
     */
    setBody(data)
    {
        const rowsHtml = data.map(row => {
            return `
                <tr>
                    ${ row.map(text => `<td>${ text }</td>`).join("")}
                </tr>
            `;
        });
        this.root.insertAdjacentHTML("beforeend",`
        <tbody>
            ${ rowsHtml.join("")}
        </tbody>
        `);
    }
}
