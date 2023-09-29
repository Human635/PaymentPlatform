import { off } from "process";
import { userData } from "../components/ProfileElems/ProfileElems.data";

const fields = {
    name: "Имя",
    surname: "Фамилие",
    phoneNumber: "Номер",
    email: "E-mail",
    country: "Страна",

}

interface MappedFieldItem {
    fieldName: string
    fieldValue: string
}

export const mapUserDataFields = (): Array<MappedFieldItem> => {
    const UserEntries = Object.entries(userData)
    const mappedFields: Array<MappedFieldItem> = []

    for(const [key, value] of UserEntries) {
        let field = {
            //FIXME:Сделать нормальную типизацию
            //@ts-ignore
            fieldName: fields[key],
            fieldValue: value
        }

        mappedFields.push(field)
    }
    
    return mappedFields.filter(item => item.fieldName)
}