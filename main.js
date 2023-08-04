const lorem_content = `
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nunc aliquam, nibh quis facilisis tristique, massa nunc lacinia 
        felis, vitae ornare turpis felis quis eros. Praesent condimentum 
        lorem nec nibh tristique interdum. Nulla lacinia luctus odio id 
        porttitor. Maecenas dignissim turpis in vulputate pulvinar. Nam 
        nibhpurus, ultricies in felis et, sodales tristique lacus. 
        Suspendisse potenti. Etiam rutrum rhoncus diam, in posuere 
        tortor semper in. Class aptent taciti sociosqu ad litora 
        torquent per conubia nostra, per inceptos himenaeos.
    </p>
    <p>
        Sed eros dolor, venenatis sit amet pharetra mattis, iaculis sit
        amet nisl. Vestibulum quis quam bibendum, consequat erat a,
        volutpat nulla. Morbi blandit efficitur sollicitudin. Nullam
        vestibulum eros sapien, ut rhoncus tellus mollis non. Nulla
        volutpat placerat vehicula. Praesent eu mauris et nisi rhoncus
        aliquam. Maecenas ut metus a magna consectetur eleifend eu in
        nulla. Etiam non lobortis mauris. Sed nec porta quam. Integer
        diam risus, bibendum ac porttitor ac, pretium a elit. Aliquam 
        in egestas ante, a varius odio. Vivamus dui nibh, scelerisque
        a feugiat non, interdum sit amet quam. Suspendisse vehicula,
        diam a faucibus malesuada, tellus velit fringilla est, quis
        imperdiet tortor nulla quis eros. Vestibulum imperdiet
        tincidunt risus.
    </p>
`

const articles = [
    {
        title: 'My first post!',
        date: '2023-7-10',
        author: 'JorensM',
        img: './res/post_1.png',
        content: lorem_content,
        id: 0
    },
    {
        title: 'Software Development Principles',
        date: '2023-8-1',
        author: 'JorensM',
        img: './res/post_1.png',
        content: lorem_content,
        id: 1
    }
]

const renderNav = () => `
    <nav>
        <ul>
            <li>
                <a href='index.html'>
                    Blog
                </a>
            </li>
            <li>
                <a href='about.html'>
                    About
                </a>
            </li>
            <li>
                <a href='contact.html'>
                    Contact
                </a>
            </li>
            
        </ul>
    </nav>
`

const renderArticleBox = (article) => `
    <article class='post-preview' >
        <img src="${article.img || ''}" width='100%'/>
        <h2><a href='article.html?id=${article.id}'>${article.title}</a></h2>
        By <address>${article.author}</address>
        <time datetime="${article.date}">${article.date}</time>
        <blockquote class='article-excerpt'>
            ${article.content.slice(0, 256)}
        </blockquote>
    </article>
`

// Render navigation
document.getElementsByTagName('header')[0]
    .insertAdjacentHTML('beforeend', renderNav())
document.getElementsByTagName('footer')[0]
    .insertAdjacentHTML('beforeend', renderNav())

//Render articles
const main_article_e = document.getElementById('main-articles')
const suggested_articles_e = document.getElementById('suggested-articles')

for (const article of articles) {
    main_article_e.insertAdjacentHTML(
        'beforeend', 
        renderArticleBox(article)
    )
    suggested_articles_e.insertAdjacentHTML(
        'beforeend', 
        renderArticleBox(article)
    )
}