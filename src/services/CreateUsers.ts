
interface techsData {
    title: string,
    experience: number
}


interface createUserData {
    name ?: string, 
    email: string,
    password: string,
    techs: Array<string | techsData> // ou string[] - para tipos unicos
}


export default function createUser ({name, email, password}: createUserData) {
    const user = {
        name, 
        email, 
        password
    }

    return user
}

