export interface ICustomer {
  _id?: number
  avatar?: string
  name: string
  last_name: string
  company: string
  email: string
  status: string
  password?: string
}

export const customers: ICustomer[] = [
  {
    _id: Math.random(),
    avatar: 'test',
    name: 'Jane',
    last_name: 'Cooper',
    company: 'Apple',
    email: 'jessica.hanson@example.com',
    status: 'admin',
    password: '12345678',
  },
  {
    _id: Math.random(),
    avatar: 'test',
    name: 'Guy',
    last_name: ' Hawkins',
    company: 'IBM',
    email: 'bill.sanders@example.com',
    status: 'admin',
    password: '12345678',
  },
  {
    _id: Math.random(),
    avatar: 'test',
    name: 'Jenny',
    last_name: 'Wilson',
    company: 'Gillette',
    email: 'georgia.young@example.com',
    status: 'user',
    password: '12345678',
  },
  {
    _id: Math.random(),
    avatar: 'test',
    name: 'Robert',
    last_name: 'Fox',
    company: 'Ferrari',
    email: 'sara.cruz@example.com',
    status: 'admin',
    password: '12345678',
  },
  {
    _id: Math.random(),
    avatar: 'test',
    name: 'Cody',
    last_name: 'Fisher',
    company: 'Starbucks',
    email: 'jackson.graham@example.com',
    status: 'admin',
    password: '12345678',
  },
  {
    _id: Math.random(),
    avatar: 'test',
    name: 'Albert',
    last_name: 'Flores',
    company: 'Nintendo',
    email: 'tanya.hill@example.com',
    status: 'user',
    password: '12345678',
  },
  {
    _id: Math.random(),
    avatar: 'test',
    name: 'Cameron',
    last_name: 'Williamson',
    company: 'General Electric',
    email: 'michael.mitc@example.com',
    status: 'user',
    password: '12345678',
  },
]
