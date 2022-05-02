import { atom, useRecoilState } from "recoil"

const date = new Date()


const usersState = atom({
    key: 'users',
    default: [],
})


function useUsersActions() {
    const [users, setUsers] = useRecoilState(usersState)

    const createUser = async (newUser) => {

        //const createdUser = await apiClient.createIndustry(newUser)
        const lastId = users.length > 0 ? users[users.length - 1].id : 0;
        newUser.id = lastId + 1
        setUsers([...users, newUser])
    }

    const updateUser = async (updatedUser) => {
        //const newValue = await apiClient.updateUser(updatedUser)
        const newUsers = users.map((user) => {
            if (user.id !== updatedUser.id) {
                return user
            }
            return updatedUser
        })
        setUsers(newUsers)
    }

    const deleteUser = async (id) => {
        //await apiClient.deleteUser(id)
        const newUsers = users.filter((user) => user.id !== id)
        setUsers(newUsers)
    }
    const useGetById = async (id) => {
        const url = "https://rickandmortyapi.com/api/character/" + id
        const res = await fetch(url);
        const userJson = await res.json()
        return userJson
    }
    const useGetAll = async () => {
        const url = "https://rickandmortyapi.com/api/character"
        const res = await fetch(url);
        const usersJson = await res.json()
        setUsers(usersJson.results)

    }

    return { createUser, updateUser, deleteUser, useGetById, useGetAll }
}

export {
    usersState,
    useUsersActions
}