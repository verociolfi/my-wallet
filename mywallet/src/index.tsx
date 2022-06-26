import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model }  from 'miragejs';

createServer({
  models: {
    transaction: Model,

  },

  seeds(server) {
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Salário Mensal',
          type: 'deposit',
          category: 'Emprego',
          amount: 10000,
          createdAt: new Date('2022-01-05 12:00:00'),
        },
        {
          id: 2,
          title: 'Pagamento do Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1500,
          createdAt: new Date('2022-01-15 14:00:00'),
        },
        {
          id: 3,
          title: 'Ração do Cachorro',
          type: 'withdraw',
          category: 'Pet',
          amount: 100,
          createdAt: new Date('2022-01-16 08:00:00'),
        },
        {
          id: 4,
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 3000,
          createdAt: new Date('2022-01-13 17:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
     return this.schema.all('transaction');
    })
    
    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


