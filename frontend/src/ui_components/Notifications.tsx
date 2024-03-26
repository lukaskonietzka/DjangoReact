import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import * as React from 'react'
import { useEffect } from 'react'


interface NotifyItem {
    type: 'error' | 'success' | 'info' | 'warning'
    title: string
    message: string[] | string
    timeout: NodeJS.Timeout
    auto: boolean
}

export class Notify {
    private _addMessage = null

    register(addMessage: (type: string, title: string, message: string[] | string) => void) {
        // @ts-ignore
        this._addMessage = addMessage
    }

    unregister() {
        this._addMessage = null
    }

    success (message: string[] | string) {
        if (this._addMessage) {
            // @ts-ignore
            this._addMessage('success', 'Erfolg', message)
        }
    }

    error (message: string[] | string) {
        if (this._addMessage) {
            // @ts-ignore
            this._addMessage('error', 'Fehler', message)
        }
    }

    warning (message: string[] | string) {
        if (this._addMessage) {
            // @ts-ignore
            this._addMessage('warning', 'Hinweis', message)
        }
    }

    info (message: string[] | string) {
        if (this._addMessage) {
            // @ts-ignore
            this._addMessage('info', 'Info', message)
        }
    }
}

export const notify: Notify = new Notify()

export const Notification: React.FC = () => {
    const [items, setItems] = React.useState<NotifyItem[]>([])

    useEffect(() => {
        notify.register(addMessage)
        return () => {
            notify.unregister()
        }
    }, [])

    const addMessage = (type: string, title: string, message: string | string[]) => {
        const item: NotifyItem = {
            // @ts-ignore
            type: type,
            title: title,
            message: message,
            // @ts-ignore
            timeout: null,
            auto: false
        }

        if (type !== 'error') {
            item.auto = true
            autoRemove(item)
        }

        setItems(prevState => {
            prevState.splice(0, 0, item)
            return [...prevState]})
    }

    const remove = (item: NotifyItem) => {
        setItems(prevState => {
            if (item.timeout) clearTimeout(item.timeout)

            const index = prevState.indexOf(item)

            if (index !== -1) {
                prevState.splice(index, 1)
            }

            return [...prevState]
        })
    }

    const autoRemove = (item: NotifyItem) => {
        if (item.auto) {
            item.timeout = setTimeout(() => {
                remove(item)
            }, 5000)
        }
    }

    const stopTimer = (item: NotifyItem) => {
        if (item.timeout) clearTimeout(item.timeout)
        // @ts-ignore
        item.timeout = null
    }

    return (
        <Stack
            sx={{ width: '100%' }}
            spacing={2}>
            {items.map((item: NotifyItem, index: number) => {
                return (
                    <Alert
                        key={index}
                        severity={item.type}
                        style={{zIndex: '999999'}}
                        onClick={() => remove(item)}
                        onMouseEnter={() => stopTimer(item)}
                        onMouseLeave={() => autoRemove(item)}>
                        <div>
                            <h4 className="ui-notification-title">
                               {item.title}
                            </h4>
                            {typeof item.message === 'string' &&
                                <ul>
                                    <li className={'ui-notification-text'}>
                                        {item.message}
                                    </li>
                                </ul>
                            }
                            {typeof item.message === 'object' &&
                                <ul>
                                    {item.message.map((msg, index) => (
                                        <li className={'ui-notification-text'}
                                            key={index}
                                        >
                                            {msg}
                                        </li>
                                    ))}
                                </ul>
                            }
                        </div>
                    </Alert>
                )
            })}
        </Stack>
    )
}
