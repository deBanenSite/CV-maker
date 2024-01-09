import { useContext } from 'react'
import UUID from 'uuid/v4'
import { AppContext } from '../contexts/AppContext'
import { Section, SectionTypes } from './ResumeTypes'
import { useTrail, animated } from '@react-spring/web'

type SectionNoId = Omit<Section, 'id'>

const selectOptions: SectionNoId[] = [
  {
    type: SectionTypes.TEXT,
    title: 'Profiel',
    elements: [
      { elements: [''] }
    ]
  },
  {
    type: SectionTypes.EDUCATION,
    title: 'Opleiding',
    elements: [
      { degree: '', program: '', university: '', date: '' }
    ]
  },
  {
    type: SectionTypes.SKILL,
    title: 'Vaardigheden',
    elements: [
      { name: '', levels: [ true, true, true, true, false ] },
    ]
  },
  {
    type: SectionTypes.EXPERIENCE,
    title: 'Werkervaring',
    elements: [
      {
        title: '', company: '', extra: '', elements: [
          ''
        ],
      },
    ],
    date: true
  },
  {
    type: SectionTypes.EXPERIENCE,
    title: 'Vrijwilligerswerk',
    elements: [
      {
        title: '', company: '', extra: '', elements: [
          '',
        ],
      },
    ],
    date: true
  },
  {
    type: SectionTypes.LIST,
    title: 'Portfolio',
    elements: [
      {
        title: '', extra: '', elements: [
          ''
        ],
      }
    ],
    date: false
  },
  {
    type: SectionTypes.LIST,
    title: 'Prestaties',
    elements: [
      {
        elements: ['']
      }
    ],
    simple: true,
  },
  {
    type: SectionTypes.REFERENCE,
    title: 'Referenties',
    elements: [
      {
        name: '',
        occupation: '',
        company: '',
        companyAddress: '',
        phone: '',
        email: '',
      }
    ]
  }
]

const customSelectOptions = [
  {
    type: SectionTypes.LIST,
    title: 'Datalijst',
    elements: [{ title: '', extra: '', elements: [''] }],
    date: true
  },
  {
    type: SectionTypes.LIST,
    title: 'Titellijst',
    elements: [{ title: '', extra: '', elements: [''] }],
    date: false
  },
  {
    type: SectionTypes.LIST,
    title: 'Lijst',
    elements: [{ title: '', extra: '', elements: [''] }],
    simple: true
  },
  {
    type: SectionTypes.TEXT,
    title: 'Tekstblok',
    elements: [{ elements: [''] }]
  },
  {
    type: SectionTypes.SKILL,
    title: 'Competenties',
    elements: [
      { name: '', levels: [ true, true, true, true, false ] },
      { name: 'competenties', levels: [ true, true, true, false, false ] }
    ]
  },
  {
    type: SectionTypes.PAGEBREAK,
    title: 'Extra pagina',
    elements: [],
  }
]

const SelectContent: React.FC<{ scrollToBottom: () => void }> = ({ scrollToBottom }) => {
  const { addSection } = useContext(AppContext)
  const add = (section: SectionNoId) => {
    // Create unique copy of elements instead of passing reference
    const sectionWithIdElements = section.elements.map((el) => ({ ...el, id: UUID() }))
    const sectionWithId = { ...section, id: UUID(), elements: sectionWithIdElements }
    addSection(sectionWithId)
    scrollToBottom()
  }

  const springOptions = useTrail(selectOptions.length, {
    config: { mass: 2, tension: 4000, friction: 200 },
    opacity: 1,
    from: { opacity: 0 }
  })
  const springCustomOptions = useTrail(customSelectOptions.length, {
    config: { mass: 2, tension: 4000, friction: 200 },
    opacity: 1,
    from: { opacity: 0 }
  })

  return (
    <div className="content__select">
      <h3>CV opstellen</h3>
      <div className="content__select--items">
        {springOptions.map(({ ...rest }, index) => {
          return (
            <animated.button
              key={index}
              style={{ ...rest }}
              className="btn"
              onClick={() => add(selectOptions[index])}
            >
              {selectOptions[index].title}
            </animated.button>
          )
        })}
      </div>
      <h4></h4>
      <div className="content__select--items">
      {springCustomOptions.map(({ ...rest }, index) => {
          return (
            <animated.button
              key={index}
              style={{ ...rest }}
              className="btn"
              onClick={() => add(customSelectOptions[index])}
            >
              {customSelectOptions[index].title}
            </animated.button>
          )
        })}
      </div>
    </div>
  )
}

export default SelectContent