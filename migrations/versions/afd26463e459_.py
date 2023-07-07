"""empty message

<<<<<<< HEAD
<<<<<<<< HEAD:migrations/versions/afd26463e459_.py
Revision ID: afd26463e459
Revises: 
Create Date: 2023-06-26 16:48:15.210454
========
Revision ID: 8c4e7433aff9
Revises: 
Create Date: 2023-06-30 11:37:25.529921
>>>>>>>> main:migrations/versions/8c4e7433aff9_.py
=======
<<<<<<<< HEAD:migrations/versions/21de3d0ff743_.py
Revision ID: 21de3d0ff743
Revises: 
Create Date: 2023-07-06 09:11:45.081608
========
Revision ID: afd26463e459
Revises: 
Create Date: 2023-06-26 16:48:15.210454
>>>>>>>> c4ec9b7 (formularios conectados a la base de datos):migrations/versions/afd26463e459_.py
>>>>>>> 6694a87 (prueba)

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<< HEAD
<<<<<<<< HEAD:migrations/versions/afd26463e459_.py
revision = 'afd26463e459'
========
revision = '8c4e7433aff9'
>>>>>>>> main:migrations/versions/8c4e7433aff9_.py
=======
<<<<<<<< HEAD:migrations/versions/21de3d0ff743_.py
revision = '21de3d0ff743'
========
revision = 'afd26463e459'
>>>>>>>> c4ec9b7 (formularios conectados a la base de datos):migrations/versions/afd26463e459_.py
>>>>>>> 6694a87 (prueba)
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('genre',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('movie',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('original_title', sa.String(length=120), nullable=False),
    sa.Column('overview', sa.String(length=600), nullable=False),
    sa.Column('poster_path', sa.String(length=120), nullable=False),
    sa.Column('release_date', sa.String(length=120), nullable=False),
    sa.Column('backdrop_path', sa.String(length=120), nullable=False),
<<<<<<< HEAD
<<<<<<<< HEAD:migrations/versions/afd26463e459_.py
    sa.Column('gender_ids', sa.Integer(), nullable=False),
    sa.Column('trailer', sa.String(length=120), nullable=False),
    sa.Column('image', sa.String(length=120), nullable=False),
========
    sa.Column('vote_average', sa.Float(precision=2), nullable=True),
    sa.Column('vote_count', sa.Integer(), nullable=True),
>>>>>>>> main:migrations/versions/8c4e7433aff9_.py
=======
<<<<<<<< HEAD:migrations/versions/21de3d0ff743_.py
    sa.Column('vote_average', sa.Float(precision=2), nullable=True),
    sa.Column('vote_count', sa.Integer(), nullable=True),
========
    sa.Column('gender_ids', sa.Integer(), nullable=False),
    sa.Column('trailer', sa.String(length=120), nullable=False),
    sa.Column('image', sa.String(length=120), nullable=False),
>>>>>>>> c4ec9b7 (formularios conectados a la base de datos):migrations/versions/afd26463e459_.py
>>>>>>> 6694a87 (prueba)
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('last_name', sa.String(length=120), nullable=False),
    sa.Column('nickname', sa.String(length=120), nullable=False),
    sa.Column('birthday', sa.String(length=80), nullable=True),
    sa.Column('avatar', sa.String(length=80), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('nickname')
    )
    op.create_table('Genre_Movie',
    sa.Column('movie_id', sa.Integer(), nullable=False),
    sa.Column('genre_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['genre_id'], ['genre.id'], ),
    sa.ForeignKeyConstraint(['movie_id'], ['movie.id'], ),
    sa.PrimaryKeyConstraint('movie_id', 'genre_id')
    )
    op.create_table('review',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('movie_id', sa.Integer(), nullable=True),
    sa.Column('title', sa.String(length=120), nullable=False),
    sa.Column('text', sa.String(length=1200), nullable=False),
    sa.ForeignKeyConstraint(['movie_id'], ['movie.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('videos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('key', sa.String(length=120), nullable=False),
    sa.Column('type', sa.String(length=120), nullable=False),
    sa.Column('site', sa.String(length=120), nullable=False),
    sa.Column('movie_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['movie_id'], ['movie.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('like',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('review_id', sa.Integer(), nullable=True),
    sa.Column('like', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['review_id'], ['review.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('score',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('value', sa.Integer(), nullable=False),
    sa.Column('movie_id', sa.Integer(), nullable=True),
    sa.Column('review_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['movie_id'], ['movie.id'], ),
    sa.ForeignKeyConstraint(['review_id'], ['review.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('score')
    op.drop_table('like')
    op.drop_table('videos')
    op.drop_table('review')
    op.drop_table('Genre_Movie')
    op.drop_table('user')
    op.drop_table('movie')
    op.drop_table('genre')
    # ### end Alembic commands ###