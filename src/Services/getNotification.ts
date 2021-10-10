import { INotifData } from "../components/backoffice/doctor/Doctor"
import { Http } from "./http"

const http = new Http()

export const RecurentGetNotification = (url: string, changeCallback: (newData: INotifData) => void) => {
    http.get(url).then((res) => {
        changeCallback(res.data)
        setTimeout(() => {
            RecurentGetNotification(url, changeCallback)
        }, 4000)
    })
}

export const OnshotGetNotification = (url: string): Promise<INotifData> => http.get(url).then((res) => res.data)