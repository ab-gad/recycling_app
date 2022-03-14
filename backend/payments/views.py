from django.conf import settings
from rest_framework.views import APIView
import stripe
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import redirect

stripe.api_key = settings.STRIPE_SECRET_KEY


class StripeCheckoutView(APIView):
    def post(self, request):
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        'price': 'price_1KdBTBJ336fqgY5l2gvj3dNi',
                        'quantity': 1,
                    },
                ],
                mode='payment',
                success_url=settings.SITE_URL + \
                '/?success=true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.SITE_URL + '?canceled=true',
            )
            return redirect(checkout_session.url)
        except:
            return Response(
                {
                    'error': 'Something went wrong while creating stripe checkout session'
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
