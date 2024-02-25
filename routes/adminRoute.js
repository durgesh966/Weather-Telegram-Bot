const express = require('express');
const bodyParser = require('body-parser');
const User = require("../database/schema/User");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.render('admin', { users });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/admin/block-user', async (req, res) => {
    try {
        const { userId, block } = req.body;
        await User.updateOne({ _id: userId }, { block });
        console.log('User updated successfully');
        res.redirect('/');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.post('/admin/delete-user', async (req, res) => {
    try {
        const { userId } = req.body;
        await User.deleteOne({ _id: userId });
        res.redirect('/');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
