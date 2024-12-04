import React from 'react'
import styles from './sidebar.module.css'
import {MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney} from "react-icons/md"

const menuItems = [
    {
        title:"Pages",
        list: [
            {
                title:"Dashboard",
                path:"/dashboard",
                icon : <MdDashboard/>
            },
            {
                title:"Users",
                path:"/dashboard/users",
                icon : <MdSupervisedUserCircle/>
            },
            {
                title:"Products",
                path:"/dashboard/products",
                icon : <MdShoppingBag/>
            },
            {
                title:"Transactions",
                path:"/dashboard/transactions",
                icon: <MdAttachMoney/>
            },
        ],
    },
    {
        title: "Analytics",
        list : [
            {

            }
        ],
    }
]
const Sidebar = () => {
  return (
    <div className={styles.container}>Sidebar</div>
  )
}

export default Sidebar