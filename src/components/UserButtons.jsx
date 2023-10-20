import { Button, Modal, Row } from 'antd'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { savedUsers } from '../operations/savedUsers'
import { ModalInfo } from './ModalInfo'

function UserButtons({ user, weather }) {
	const { pathname } = useLocation()
	const isHomePage = pathname === '/'
	const { set } = savedUsers
	const [open, setOpen] = useState(false)

	const showModal = () => setOpen(true)
	const handleOk = () => setOpen(false)
	const handleCancel = () => setOpen(false)

	return (
		<Row justify='space-evenly'>
			<Button onClick={showModal} type='primary'>Weather</Button>
			{
				isHomePage ? <Button onClick={() => set(user)}>Save</Button>
					: null
			}

			<Modal
				open={open}
				title={`${user.name.first} ${user.name.last} weather details`}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={(_, { OkBtn }) => (
					<>
						<OkBtn />
					</>
				)}
			>
				<ModalInfo weather={weather} />
			</Modal>
		</Row>
	)
}

export { UserButtons }
