import React from 'react'
// import images by 
import goat1 from '../assets/images/goat1.jpeg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from './Card'

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Date-Nite',
                    tools: 'React - Redux - Rails',
                    subTitle: 'Date-Nite is a blind dating app designed to have two users match through dating and dining interests. A user would be able to select a restaurant and submit reservation requests, which would trigger a match if another user with the same dating preferences would select the same time slot. Upon a match, a user can view their match portal where a code-word would be assigned. The user would later present the code word at the dating destination to be seated/meet their blind date.',
                    imgSrc: goat1,
                    git: 'https://github.com/umbirius/Date-Nite',
                    demo: 'https://youtu.be/_dIz7h_jXHA',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Stock Sifter',
                    tools: 'Javascript(Vanilla) - Rails',
                    subTitle: 'Stock Sifter is an API designed to help a user screen stocks based on their values of interest. The user would then be able to save thier filter settings and load them at a later date to find new prospective stock plays based on an ever changing market.',
                    imgSrc: goat1,
                    git: 'https://github.com/umbirius/Stock_Sifter',
                    demo: 'https://youtu.be/ANSB8nMvgWA',
                    selected: false
                },
                {
                    id: 2,
                    title: 'scribbit',
                    tools: 'Scribbit is a place where aspiring writers and story tellers can put "pen to paper" and help bring their thoughts to life. Equipped with tools to help organize characters, scenes, and settings, it will really help your projects grow.Want a second pair of eyes to look at your story? Good news for you as Scribbit offers a peer review system to enable a remote user to select your review request and comment on your project. Don\'t think too hard, just Scribbit!',
                    subTitle: 'Dream',
                    imgSrc: goat1,
                    git: 'https://github.com/umbirius/scribbit',
                    demo: 'https://youtu.be/m2wAkHC6FuE',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel
