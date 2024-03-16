import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Trợ lý của Troussier làm HLV tạm quyền U23 Việt Nam</b>làm HLV tạm quyền U23 Việt Nam
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Trợ lý của Troussier làm HLV tạm quyền U23 Việt Nam</h1>
                    <p className={styles.postDesc}>
                        Do bận dẫn dắt ĐTQG đá vòng loại World Cup 2026,
                        HLV Philippe Troussier giao trợ lý Moulay Lahsen
                        Azzeggouarh chỉ đạo U23 trong đợt tập trung
                        tháng 3/2024. 10
                    </p>
                    <button className={styles.button}><span>Read more</span></button>
                </div>
            </div>
        </div>
    )
}

export default Featured
