const data = [
              {
                id: 1,
                imageSrc: 'img/img1.jpeg',
                text: 'I just bought these shorts they are a perfect length!',
                tags: ['#summer', 'Tag2', 'Tag3'],
              },
]
              //{
              //  id: 2,
              //  imageSrc: 'img/img2.jpeg',
              //  text: 'These linen pants are so breathable and flowy',
              //  tags: ['Tag4', 'Tag5', 'Tag6'],
              //},
              // Add more data as needed


            const CardList = () => {
              return (
                <div>
                  {data.map((card) => (
                    <div key={card.id} className="card">
                      <img src={card.imageSrc} alt={`Card ${card.id}`} />
                      <p>{card.text}</p>
                      <div className="tags">
                        {card.tags.map((tag, index) => (
                          <span key={index} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              );
            };

            export default CardList;
