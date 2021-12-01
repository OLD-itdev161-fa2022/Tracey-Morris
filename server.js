
);

const returnToken = (user, res) => {
    const payload = {
        user: {
            id: user.id
        }
    };

    jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '10hr' },
        (err, token) => {
            if (err) throw err;
            res.json({ token: token });
        }
    );
};

// Post endpoints
/**
 * @route POST api/posts
 * @desc Create post
 */

        }

        // Check password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid email or password' }] });
        }

        // Generate and return a JWT token
        returnToken(user, res);
      } catch (error) {
        res.status(500).send('Server error');
      }

app.listen(port, () => console.log(`Express server running on port ${port}`));


