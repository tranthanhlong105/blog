import React from 'react'
import styles from "./pagination.module.css"


const Pagination = () => {
    return (
        <div className={styles.container}>
            <div className={styles.button}><span>Click</span><span>Previous</span></div>
            <div className={styles.button}><span>Click</span><span>Next</span></div>
        </div>
    )
}

export default Pagination
