import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class MovieController {
  constructor ({ movieModel }) {
    this.movieModel = movieModel
  }

  getAll = async (req, res) => {
    const { genre } = req.query

    const movies = await this.movieModel.getAll({ genre })

    res.json(movies)
  }

  getById = async (req, res) => {
    const { id } = req.params

    const movie = await this.movieModel.getById({ id })

    if (movie) return res.json(movie)

    res.status(404).json({ message: 'Movie not found' })
  }

  create = async (req, res) => {
    const validationResult = validateMovie(req.body)

    if (!validationResult.success) {
    // return res.status(400).json({ error: JSON.parse(result.error.message) })
      return res.status(400).json(validationResult.error.flatten())
    }

    const newMovie = await this.movieModel.create({ movie: validationResult.data })

    res.status(201).json(newMovie)
  }

  update = async (req, res) => {
    const validationResult = validatePartialMovie(req.body)

    if (!validationResult.success) {
      return res.status(400).json({ error: JSON.parse(validationResult.error.message) })
    }

    const { id } = req.params

    const updatedMovie = await this.movieModel.update({ id, movie: validationResult.data })

    if (updatedMovie === false) return res.status(404).json({ message: 'Movie not found' })

    res.json(updatedMovie)
  }

  delete = async (req, res) => {
    const { id } = req.params

    const result = await this.movieModel.delete({ id })

    if (result === false) return res.status(404).json({ message: 'Movie not found' })

    res.json({ message: 'Movie deleted' })
  }
}
