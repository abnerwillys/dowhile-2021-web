
import { useMessages } from '../../hooks/useMessages'

import logoImg from '../../assets/logo.svg'
import styles from './styles.module.scss'

export function MessageList() {
  const { messages } = useMessages()

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="teste" />

      <ul className={styles.messageList}>
        { messages.map(message => (
          <li key={message.id} className={styles.message}>
            <p className={styles.messageContent}>
              {message.text}
            </p>

            <div className={styles.messageUser}>
              <div className={styles.userImage}>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>

              <span>{message.user.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

