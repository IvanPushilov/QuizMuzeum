const express = require("express");
const router = express.Router();
const { Comment, User, Post } = require("../../db/models");

router.post('/', async (req, res) => {
    console.log(123123123132123);
	try {
		const { title, post_id } = req.body;

		if (res.locals.user) {
			const commentAdd = await Comment.create({
				post_id: +post_id,
				title,
				user_id: res.locals.user.id,
			});
			const commentUser = await Comment.findOne({
				include: { model: User },
				where: { id: commentAdd.id },
			});
			res.json({ commentUser });
		}
	} catch ({ message }) {
		res.json({ type: 'comment router', message });
	}
});

router.get('/:id', async (req, res) => {
	console.log(12312312);
	try {
		const { id } = req.params;
        console.log(id);
		const comments = await Comment.findAll({
			where: { post_id: +id },
		});
		res.json(comments);
	} catch ({ message }) {
		res.json({ type: 'comment router', message });
	}
});




module.exports = router;
