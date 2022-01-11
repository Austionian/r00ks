import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons"

const Pill = ({ language }) => {

    const lanuageMatrix = {
        'Python': {
            'fa': true,
            'icon': faPython,
        },
        'TypeScript': {
            'fa': false,
        },
        'Django': {
            'fa': false,
        },
        'Flask': {
            'fa': false,
        }
    }

    let bg = `bg-${language.trim().toLowerCase()}`;
    let className = `flex items-center justify-center p-2 mr-2 rounded-2xl w-24 h-8 text-sm pill-text`;
    className = className + ' ' + bg;

    if (lanuageMatrix[language].fa) {
        const Icon = lanuageMatrix[language].icon;
        return (
            <div className={className}>
                <FontAwesomeIcon icon={Icon} className="h-4"/><p className="pl-2 m-0">{language}</p>
            </div>
        )
    }
    if (language === 'Django') {
        const DjangoIcon = require('../public/assets/svg/django.svg')
        return (
            <div className={className}>
                <p className="pl-2 m-0"><DjangoIcon style={{height: '20px'}}/></p>
            </div>
        )
    }
    if (language === 'TypeScript') {
        const TypeScriptIcon = require('../public/assets/svg/typescript.svg')
        return (
            <div className={className} style={{width: '125px'}}>
                <TypeScriptIcon className="h-4 w-4" style={{fill: '#fff'}}/><p className="pl-2 m-0">{language}</p>
            </div>
        )
    }
    const Icon = require(`../public/assets/svg/${language.trim().toLowerCase()}.svg`)
    return (
        <div className={className}>
            <Icon className="h-4 w-4" style={{fill: '#fff'}}/><p className="pl-2 m-0">{language}</p>
        </div>
    )
}

export default Pill