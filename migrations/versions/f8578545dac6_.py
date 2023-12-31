"""empty message

Revision ID: f8578545dac6
Revises: 8a3a71497e98
Create Date: 2023-07-24 18:49:36.211354

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f8578545dac6'
down_revision = '8a3a71497e98'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('movie', schema=None) as batch_op:
        batch_op.alter_column('vote_average',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=2),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('movie', schema=None) as batch_op:
        batch_op.alter_column('vote_average',
               existing_type=sa.Float(precision=2),
               type_=sa.REAL(),
               existing_nullable=True)

    # ### end Alembic commands ###
