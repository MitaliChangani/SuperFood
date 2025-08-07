from django.contrib import admin
from .models import CustomUser, Order, OTP, OrderItem
from django.utils.timezone import now

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone_number', 'address', 'is_active')
    search_fields = ('name', 'phone_number')
    list_filter = ('is_active',)
    ordering = ['-id']

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = ('item_name', 'quantity', 'price_per_item', 'total_price')
    fields = ('item_name', 'quantity', 'price_per_item', 'total_price')
    can_delete = False

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('order_id', 'user', 'order_date', 'total_amount', 'delivery_status')
    search_fields = ('user__name', 'order_id')
    list_filter = ('delivery_status', 'order_date')
    inlines = [OrderItemInline]
    readonly_fields = ('order_id', 'user', 'order_date', 'total_amount')
    ordering = ['-order_date']
    list_display_links = ('order_id', 'user')

@admin.register(OTP)
class OTPAdmin(admin.ModelAdmin):
    list_display = ('phone_number', 'otp', 'created_at', 'is_expired')
    search_fields = ('phone_number',)
    list_filter = ('created_at',)
    ordering = ['-created_at']

    def is_expired(self, obj):
        return (now() - obj.created_at).seconds > 300  # OTP is valid for 5 mins
    is_expired.boolean = True
    is_expired.short_description = 'Expired?'
