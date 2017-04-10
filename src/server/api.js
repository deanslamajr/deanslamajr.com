import express from 'express'
import uuid from 'uuid/v4'

import { add as addReading, get as getReadings } from './models/readings'
import { get as getAbout } from './models/about'
import { get as getPosts } from './models/posts'
import { get as getProjects } from './models/projects'

const router = express.Router()

router.get('/projects', (req, res) => {
  getProjects()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(() => {
      // @todo log error
      res.sendStatus(500)
    })
})

router.get('/posts', (req, res) => {
  getPosts()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(() => {
      // @todo log error
      res.sendStatus(500)
    })
})

router.get('/about', (req, res) => {
  getAbout()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(() => {
      // @todo log error
      res.sendStatus(500)
    })
})

router.get('/readings', (req, res) => {
  getReadings()
    .then(readings => {
      res.status(200).json(readings)
    })
    .catch(() => {
      // @todo log error
      res.sendStatus(500)
    })
})

router.post('/readings', (req, res) => {
  // need to validate against empty strings (on frontend too!)
  const readingData = {
    author: req.body.author,
    foundDate: (new Date()).getTime(),
    publishDate: req.body.publishDate,
    publication: req.body.publication,
    quote: req.body.quote,
    title: req.body.title,
    url: req.body.url,
    id: uuid()
  }

  addReading(readingData)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(error => {
      let code

      error === 418
        ? code = 418
        : code = 500

      res.sendStatus(code)
    })
})

export default router
