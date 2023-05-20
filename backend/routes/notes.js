const express = require('express')
const router = express.Router()
const Notes = require('../modules/Note')
const loginuser = require('../middleware/loginuser')
const { body, validationResult } = require('express-validator');



// this is for fecthing data from server
router.get('/fetchnotes', loginuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.send(notes)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})

// this is insert data to server

router.post('/addnote', loginuser, [
    body('tittle', 'Enter a valid tittle').isLength({ min: 1 }),
    body('description', 'description should be greater then 5 letters').isLength({ min: 5 })
], async (req, res) => {
    const { tittle, description, tag } = req.body
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: "Please Enter carefully" });
    }
    try {
        const note = new Notes({
            tittle, description, tag, user: req.user.id
        })
        const savednote = await note.save()
        res.json(savednote)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error 2")
    }
})


//this is used for update data

router.put('/updatenote/:id', loginuser, async (req, res) => {

    const { tittle, description, tag } = req.body
    try {

        const newNote = {}

        if (tittle) {
            newNote.tittle = tittle
        }
        if (description) {
            newNote.description = description
        }
        if (tag) {
            newNote.tag = tag
        }

        let note = await Notes.findById(req.params.id)
        if (!note) {
            return res.status(404).send("NOt found")
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed")
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

        res.json({ note })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error 2")
    }


})


//this is used for delete data

router.delete('/deletenote/:id', loginuser, async (req, res) => {
    try {
        let note = await Notes.findById(req.params.id)
        if (!note) {
            return res.status(404).send("NOt found")
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed")
        }
        note = await Notes.findByIdAndDelete(req.params.id)

        res.send("sucessfully deleted")
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error 2")
    }



})


module.exports = router
