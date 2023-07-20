import {createBrowserRouter, Outlet, useNavigate, useParams} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import {AppRoutes} from "./AppRoutes";

const AppLayout = () => (
    <>
        <Navbar/>
        <Outlet/>
    </>
)

const Users = () => {
    const navigate = useNavigate();  // це другий шлях навігації (перший -- кнопки)
    setTimeout(() => {
        navigate(AppRoutes.LOGIN)
    }, 3000)
    return (
        <>
            <div>users</div>
            <Outlet/>
        </>
    )
}

const UserId = () => {
    const {userId} = useParams()  // це хук, який виділяє параметри, які користувач(ка) ввів у браузері, тобто все післяостаннього слеша
    fetch(`1vvdfdffd/${userId}`)  // щоб не робити окремий шлях для кожного id
    return (
        <div>user id</div>
    )
}

export const router = createBrowserRouter([
    // стандартна структура була така:
    // {
    //     path: "/",
    //     element: <div>Hello world!</div>,
    // },

    // робимо перший елемент масиву, який буде як обгортка завжди залишатися на сторінці (AppLayout буде відмальовувати Navbar), а вже в його children будуть шляхи
    {
        element: <AppLayout/>,
        errorElement: <>Oooooppppsss</>,     // додали errorElement, його можна розписати в окремій компоненті і для кожного шляху
        children: [
            {
                path: AppRoutes.MAIN,  // замінили конкретні посилання на змінні, в яких зберегли посилання у файлі AppRoutes
                element: <div>Hello world! This is base page</div>, // щоби ця штука відобразилась на сторінці, треба додати <Outlet/>
            },
            {
                path: AppRoutes.LOGIN,
                element: <div>Hello</div>, // щоби ця штука відобразилась на сторінці "/login", треба додати <Outlet/> там, де воно має вставитись
            },
            {
                path: AppRoutes.USERS,
                element: <Users/>,
                children: [
                    {
                        path: AppRoutes.USERS_INFO,
                        element: <div>users info</div>,
                    }, // оці вкладені-вкладені штуки будуть відмальовуватись вкладено, тобто після того, що відмальовується на "/users", але і для того треба робити окрему компоненту вище (ми зробили <Users/>). Тобто рендериться і вміст "/users", і вміст "/users/info". Щоб відмальовувалось не вкладено, а тільки "/users/info", треба винести "/users/info" на рівень "/users", тобто скасувати вкладеність.

                    // Вкладені-вкладені використовують рідко, бо шляхи можуть змінюватися динамічно, напр. id користувача(-ки), в такому випадку ми не будемо робити шлях для кожного id
                    {
                        path: AppRoutes.USER_ID,
                        element: <UserId/>,
                    }
                ]
            },
        ]
    },
]);