const { readFileSync } = require('fs');
const {createServer} = require('http')
const {parse} = require('url')
const {renderToString} = require("react-dom/server")
const  React  = require("react")

const pizzas = [
    {
      name: "Focaccia",
      price: 6,
    },
    {
      name: "Pizza Margherita",
      price: 10,
    },
    {
      name: "Pizza Spinaci",
      price: 12,
    },
    {
      name: "Pizza Funghi",
      price: 12,
    },
    {
      name: "Pizza Prosciutto",
      price: 15,
    },
  ];
  
  function Home() {
    return (
      <div>
        <h1>🍕 Fast React Pizza Co.</h1>
        <p>This page has been rendered with React on the server 🤯</p>
  
        <h2>Menu</h2>
        <ul>
          {pizzas.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      </div>
    );
  }
  
  function Counter() {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <button onClick={() => setCount((c) => c + 1)}>+1</button>
        <span>{count}</span>
      </div>
    );
  }
  
  function MenuItem({ pizza }) {
    return (
      <li>
        <h4>
          {pizza.name} (${pizza.price})
        </h4>
        <Counter />
      </li>
    );
  }

const htmlTemplate = readFileSync(`${__dirname}/index.html`, 'utf-8')

const server = createServer((req, res) => {
    const pathName = parse(req.url, true).pathname
    if(pathName === '/') {
        const renderedHtml = renderToString(<Home />)
        const html = htmlTemplate.replace("%%%Content%%%", renderedHtml)
        res.end(html)
    } else if(pathName === '/add') {
        res.end("Hello Mr nice")
    }
    else {
        res.end("URL can not be found...")
    }
});

server.listen(3000, ()=> console.log("Server is running 😆"))
 