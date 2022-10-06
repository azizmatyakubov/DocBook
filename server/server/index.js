import app from './app.js'
import listEndpoints from 'express-list-endpoints'

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.table(listEndpoints(app))
})