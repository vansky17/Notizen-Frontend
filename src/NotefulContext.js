import React from 'react'

const NotefulContext = React.createContext({
    notes: [],
    folders: [],
    toggle: false,
    API: 'http://localhost:8000/api',
    deleteNote: () => {},
    deleteFolder: () => {},
    addFolder: () => {},
    addNote: () => {},
    toggleErrors: () => {},
    back: () => {}
})

export default NotefulContext