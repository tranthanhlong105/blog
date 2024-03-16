import React from 'react'
import styles from "./menuPosts.module.css"
import Image from 'next/image'
import Link from 'next/link'

const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.postTitle}>Khởi đầu với triết lý lấy độc giả làm trung tâm</h3>
                    <div className={styles.detail}>
                        <span lassName={styles.username}>Thanh Long</span>
                        <span lassName={styles.date}> - 10.3.2032</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>Food</span>
                    <h3 className={styles.postTitle}>Khởi đầu với triết lý lấy độc giả làm trung tâm</h3>
                    <div className={styles.detail}>
                        <span lassName={styles.username}>Thanh Long</span>
                        <span lassName={styles.date}> - 10.3.2032</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage &&(
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                    <h3 className={styles.postTitle}>Khởi đầu với triết lý lấy độc giả làm trung tâm</h3>
                    <div className={styles.detail}>
                        <span lassName={styles.username}>Thanh Long</span>
                        <span lassName={styles.date}> - 10.3.2032</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage &&
                    (<div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.coding}`}>Coding</span>
                    <h3 className={styles.postTitle}>Khởi đầu với triết lý lấy độc giả làm trung tâm</h3>
                    <div className={styles.detail}>
                        <span lassName={styles.username}>Thanh Long</span>
                        <span lassName={styles.date}> - 10.3.2032</span>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default MenuPosts
