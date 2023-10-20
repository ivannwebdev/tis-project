import React from 'react'
import { Row } from 'antd'
import { UserCard } from '../components/UserCard'
import Title from 'antd/es/typography/Title'
import { savedUsers } from '../operations/savedUsers'

function SavedUsers() {
	const users = savedUsers.get()

	if (!users.length) return (
		<Row justify='center'>
			<Title>No saved users</Title>
		</Row>
	)

	return (
		<Row justify='center'>
			{
				users
					?.map((user, i) => <UserCard key={i} {...user}>{user.name}</UserCard>)
			}
		</Row>
	)
}

export { SavedUsers }
