import { useRef, useCallback } from 'react'
import Card from './Card'
import { useInfiniteQuery } from 'react-query'
import { getCardsPage } from '../api/axios'

const ListPage = ({ searchResults, burCheck, subCheck }) => {

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    status,
    error
  } = useInfiniteQuery('/cards', ({ pageParam = 4 }) => getCardsPage(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined
    }
  })

  const intObserver = useRef()
  const lastCardRef = useCallback(card => {
    if (isFetchingNextPage) return

    if (intObserver.current) intObserver.current.disconnect()

    intObserver.current = new IntersectionObserver(cards => {
      if (cards[0].isIntersecting && hasNextPage) {
        console.log('We are near the last card')
        fetchNextPage()
      }
    })

    if (card) intObserver.current.observe(card)
  }, [isFetchingNextPage, fetchNextPage, hasNextPage])

  if (status === 'error') return <span>Error: {error.message}</span>

  const content = data?.pages.map(pg => {
    return pg.filter((item) => {
      if (subCheck) {
        return item.cardtype.includes('subscription')
      } else if (burCheck) {
        return item.cardtype.includes('burner')
      } else {
        return searchResults.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchResults)
      }
    }).map((card, i) => {
      if (pg.length === i + 1) {
        return <Card ref={lastCardRef} key={card._id} card={card} />
      }
      return <Card key={card._id} card={card} />
    })
  })
  return (
    <main>
      <div className='card-grid mt-3'>
        {content}
      </div>
    </main>
  )
}

export default ListPage