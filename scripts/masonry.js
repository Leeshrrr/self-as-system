class Masonry {



    constructor(container, options = {}) {
        const {
            COLUMN_WIDTH = 400, // 元素宽度
                GAP_WIDTH = 30, // 元素水平间距
                GAP_HEIGHT = 30, // 元素垂直间距
        } = options

        this.COLUMN_WIDTH = COLUMN_WIDTH
        this.GAP_WIDTH = GAP_WIDTH
        this.GAP_HEIGHT = GAP_HEIGHT

        this.container = container
        this.columnCount = 0 // 列数
        this.columnHeights = [] // 每列的高度组成的数组
    }

    init() {
        this.resetColumnCount()
        this.resetHeights()
        this.manageCells()
        this.bindEvent()
    }

    /* 计算列数 */
    resetColumnCount() {
        this.columnCount = Math.max(2, Math.floor((document.body.offsetWidth + this.GAP_WIDTH) / (this.COLUMN_WIDTH + this.GAP_WIDTH)))
    }

    /* 重置高度数组 */
    resetHeights() {
        this.columnHeights = new Array(this.columnCount).fill(0)
        this.container.style.width = this.columnCount * (this.COLUMN_WIDTH + this.GAP_WIDTH) - this.GAP_WIDTH + 'px'
    }

    /* 滚动到底部，加载更多 */
    manageCells() {
        const viewportTop = document.documentElement.scrollTop - this.container.offsetTop
        const viewportBottom = document.documentElement.clientHeight + viewportTop

        if (viewportBottom >= Math.min(...this.columnHeights)) {
            this.loadMoreCells()
        }
    }

    bindEvent() {
        let scrollDelay = null
        window.onscroll = () => {
            clearTimeout(scrollDelay)
            scrollDelay = setTimeout(() => this.manageCells(), 300)
        }

        let resizeDelay = null
        window.onresize = () => {
            clearTimeout(resizeDelay)
            resizeDelay = setTimeout(() => this.reflowCells(), 300)
        }
    }

    async loadMoreCells() {
        const cells = await this.appendCells()
        this.adjustCells(cells)
        this.manageCells()
    }

    async appendCells() {
        // const data = await this.fetchData()
        const data = [

            { "src": "../text-01/index.html", "height": 400, "width": 400, "type": "text" },
            { "src": "../chart-01/index.html", "height": 800, "width": 400, "type": "table" },
            { "src": "../chart-02/index.html", "height": 500, "width": 400, "type": "table" },
            { "src": "../chart-03/index.html", "height": 700, "width": 400, "type": "table" },
            { "src": "../chart-04/index.html", "height": 750, "width": 400, "type": "table" },
            { "src": "../chart-05/index.html", "height": 550, "width": 400, "type": "table" },
            { "src": "../chart-06/index.html", "height": 650, "width": 400, "type": "table" },
            { "src": "../code-images/index.html", "height": 850, "width": 400, "type": "text" },
            { "src": "../code-images/index2.html", "height": 800, "width": 400, "type": "text" },

            { "src": "../text-01/index.html", "height": 400, "width": 400, "type": "text" },
            { "src": "../chart-01/index.html", "height": 800, "width": 400, "type": "table" },
            { "src": "../chart-02/index.html", "height": 500, "width": 400, "type": "table" },
            { "src": "../chart-03/index.html", "height": 700, "width": 400, "type": "table" },
            { "src": "../chart-04/index.html", "height": 750, "width": 400, "type": "table" },
            { "src": "../chart-05/index.html", "height": 550, "width": 400, "type": "table" },
            { "src": "../chart-06/index.html", "height": 650, "width": 400, "type": "table" },
            { "src": "../code-images/index.html", "height": 850, "width": 400, "type": "text" },
            { "src": "../code-images/index2.html", "height": 800, "width": 400, "type": "text" },

            { "src": "../text-01/index.html", "height": 400, "width": 400, "type": "text" },
            { "src": "../chart-01/index.html", "height": 800, "width": 400, "type": "table" },
            { "src": "../chart-02/index.html", "height": 500, "width": 400, "type": "table" },
            { "src": "../chart-03/index.html", "height": 700, "width": 400, "type": "table" },
            { "src": "../chart-04/index.html", "height": 750, "width": 400, "type": "table" },
            { "src": "../chart-05/index.html", "height": 550, "width": 400, "type": "table" },
            { "src": "../chart-06/index.html", "height": 650, "width": 400, "type": "table" },
            { "src": "../code-images/index.html", "height": 850, "width": 400, "type": "text" },
            { "src": "../code-images/index2.html", "height": 800, "width": 400, "type": "text" },

            { "src": "../receipt-images/receipt01.png", "height": 11334, "width": 4945, "type": "image" },
            { "src": "../receipt-images/receipt02.png", "height": 12633, "width": 4550, "type": "image" },
            { "src": "../receipt-images/receipt03.png", "height": 14450, "width": 2904, "type": "image" },
            { "src": "../receipt-images/receipt04.png", "height": 10917, "width": 4892, "type": "image" },
            { "src": "../receipt-images/receipt05.png", "height": 9350, "width": 5121, "type": "image" },
            { "src": "../receipt-images/receipt06.png", "height": 10495, "width": 6496, "type": "image" },
            { "src": "../receipt-images/receipt07.png", "height": 13075, "width": 5125, "type": "image" },
            { "src": "../receipt-images/receipt08.png", "height": 14166, "width": 5125, "type": "image" },
            { "src": "../receipt-images/receipt09.png", "height": 12122, "width": 4933, "type": "image" },
            { "src": "../receipt-images/receipt10.png", "height": 13833, "width": 3837, "type": "image" }



        ];
        console.log(data);

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function shuffle(arr) {
            let _arr = arr.slice(); //slice不会影响原来的数组，但是splice就会影响原来的arr数组
            for (let i = 0; i < _arr.length; i++) {
                let j = getRandomInt(0, i);
                let t = _arr[i];
                _arr[i] = _arr[j];
                _arr[j] = t;
            }
            return _arr;
        }
        let dataFinal = shuffle(data);
        console.log(shuffle(data));



        const fragment = document.createDocumentFragment()
        const cells = []
        const cell0 = document.createElement('div')
        cell0.classList.add('cell')

        cell0.innerHTML = `
            <div class="img-box">
             <iframe src="../text-01/index.html" width="400" height="400" ></iframe>
            </div>
          `
        cells.push(cell0)
        fragment.appendChild(cell0)

        dataFinal.forEach(item => {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            if (item.type == "table") {
                cell.innerHTML = `
                <div class="img-box">
                 <iframe src="${item.src}" width="${this.COLUMN_WIDTH}" height="${item.height * this.COLUMN_WIDTH / item.width}" scrollbar="none"></iframe>
                </div>
              `

            } else if (item.type == "text") {
                cell.innerHTML = `
                <div class="img-box">
                
                 <iframe src="${item.src}" width="${this.COLUMN_WIDTH}" height="${item.height * this.COLUMN_WIDTH / item.width}" scrollbar="none"></iframe>
               
                 </div>
              `

            } else if (item.type == "image") {
                cell.innerHTML = `
                <div class="img-box">  
                  <img class="receipts" src="${item.src}" width="${this.COLUMN_WIDTH}" height="${item.height * this.COLUMN_WIDTH / item.width}" />
                </div>
              
              `

            }

            cells.push(cell)
            fragment.appendChild(cell)
        })

        this.container.appendChild(fragment)

        return cells
    }

    adjustCells(cells) {
        cells.forEach(cell => {
            const minHeight = Math.min(...this.columnHeights)
            const indexOfMinHeight = this.columnHeights.indexOf(minHeight)
            cell.style.left = indexOfMinHeight * (this.COLUMN_WIDTH + this.GAP_WIDTH) + 'px'
            cell.style.top = minHeight + 'px'
            this.columnHeights[indexOfMinHeight] = minHeight + this.GAP_WIDTH + cell.offsetHeight
        })
        this.container.style.height = Math.max(...this.columnHeights) + 'px'
    }

    reflowCells() {
        this.resetColumnCount()
        if (this.columnCount !== this.columnHeights.length) {
            this.resetHeights()
            this.adjustCells(Array.from(this.container.children))
            this.manageCells()
        } else {
            this.manageCells()
        }
    }

    fetchData() {
        // return fetch('../JSON-file/source.json').then(res => res.json())
        return fetch('https://githubbusercontent.com/Leeshrrr/self-as-system/blob/master/JSON-file/source.json').then(res => res.json())

    }
}