class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :product_name, :size, :date_of_purchase, :dollar_amt, :return_indicator, :client_id
  # has_one :client
end
