"""empty message

Revision ID: 09e3ce3a0a67
Revises: 6b163737db00
Create Date: 2023-07-24 18:31:23.769384

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '09e3ce3a0a67'
down_revision = '6b163737db00'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('movie', schema=None) as batch_op:
        batch_op.alter_column('vote_average',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=2),
               existing_nullable=True)

    with op.batch_alter_table('review', schema=None) as batch_op:
        batch_op.alter_column('title',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=200),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('review', schema=None) as batch_op:
        batch_op.alter_column('title',
               existing_type=sa.String(length=200),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)

    with op.batch_alter_table('movie', schema=None) as batch_op:
        batch_op.alter_column('vote_average',
               existing_type=sa.Float(precision=2),
               type_=sa.REAL(),
               existing_nullable=True)

    # ### end Alembic commands ###
