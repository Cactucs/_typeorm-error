import 'reflect-metadata'
import { createConnection } from 'typeorm'
import Order from './entity/order'

createConnection()
	.then(async conn => {
		const order = await conn.manager.findOne(Order, {
			relations: ['items']
		})
	})
	.catch(error => console.log(error))
