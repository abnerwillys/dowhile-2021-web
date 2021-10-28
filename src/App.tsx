import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'

import { useAuthContext } from './hooks/useAuthContext'

import styles from './App.module.scss'

export function App() {
  const { user } = useAuthContext()

  return (
    <main
      className={`${styles.contentWrapper} ${user ? styles.contentSigned : ''}`}
    >
      <MessageList />
      {user ? <SendMessageForm /> : <LoginBox />}
    </main>
  )
}
